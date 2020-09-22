import { h, defineComponent, computed, mergeProps } from 'vue'
import { Button, View, Form } from '@tarojs/components'
import { CommonEventFunction} from "@tarojs/components/types/common"
import { ButtonProps } from "@tarojs/components/types/Button"
import { AtButtonProps } from "types/button"
import AtLoading from '../loading/index'
import { getEnvs } from '../../utils/common'
import Taro from '@tarojs/taro'

const SIZE_CLASS = {
    normal: 'normal',
    small: 'small'
}

const TYPE_CLASS = {
    primary: 'primary',
    secondary: 'secondary',
}

const AtButton = defineComponent({
    name: "AtButton",

    components: {
        AtLoading
    },

    props: {
        size: {
            type: String as () => 'normal' | 'small',
            default: 'normal' as 'normal' | 'small',
            validator: (prop: string) => ['normal', 'small'].includes(prop)
        },
        type: {
            type: String as () => 'primary' | 'secondary' | undefined,
            default: '' as 'primary' | 'secondary' | undefined,
            validator: (prop: string) => ['primary', 'secondary', ''].includes(prop)
        },
        circle: {
            type: Boolean,
            default: false
        },
        full: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        onClick: {
            type: Function as unknown as () => CommonEventFunction,
            default: () => () => { },
        },
        // Taro Button Props
        formType: {
            type: String as () => AtButtonProps['formType'],
            default: undefined,
            validator: (prop: string) => ['submit', 'reset', ''].includes(prop)
        },
        openType: {
            type: String as () => AtButtonProps['openType'],
            default: undefined,
            validator: (prop: string) => [
                'contact',
                "contactShare",
                'share',
                "getRealnameAuthInfo",
                "getAuthorize",
                "getPhoneNumber",
                "getUserInfo",
                "lifestyle",
                "launchApp",
                "openSetting",
                "feedback",
            ].includes(prop),
        },
        lang: {
            type: String as () => keyof ButtonProps.lang,
            default: 'en' as keyof ButtonProps.lang
        },
        sessionFrom: { type: String, default: '', },
        sendMessageTitle: { type: String, default: '', },
        sendMessagePath: { type: String, default: '', },
        sendMessageImg: { type: String, default: '', },
        showMessageCard: { type: Boolean, default: false, },
        appParameter: { type: String, default: '', },
        scope: { // alipay scope
            type: String as () => 'userInfo' | 'phoneNumber' | undefined,
            default: undefined
        },
        // Taro Button Events
        onGetUserInfo: {
            type: Function as unknown as () => CommonEventFunction<ButtonProps.onGetUserInfoEventDetail>,
            default: () => () => { }
        },
        onGetAuthrize: { // Alipay auth
            type: Function as unknown as () => CommonEventFunction,
            default: () => () => { }
        },
        onContact: {
            type: Function as unknown as () => CommonEventFunction<ButtonProps.onContactEventDetail>,
            default: () => () => { }
        },
        onGetPhoneNumber: {
            type: Function as unknown as () => CommonEventFunction<ButtonProps.onGetPhoneNumberEventDetail>,
            default: () => () => { }
        },
        onGetRealnameAuthInfo: {
            type: Function as unknown as () => CommonEventFunction,
            default: () => () => { }
        },
        onError: {
            type: Function as unknown as () => CommonEventFunction,
            default: () => () => { }
        },
        onOpenSetting: {
            type: Function as unknown as () => CommonEventFunction<ButtonProps.onOpenSettingEventDetail>,
            default: () => () => { }
        },
        onLaunchapp: {
            type: Function as unknown as () => CommonEventFunction,
            default: () => () => { }
        }
    },

    setup(props: AtButtonProps, { attrs, slots }) {
        const { isWEAPP, isALIPAY, isWEB } = getEnvs()

        const rootClasses = computed(() => ({
            [`at-button--${SIZE_CLASS[props.size ? props.size : 'normal']}`]: SIZE_CLASS[props.size ? props.size : 'normal'],
            [`at-button--${props.type}`]: TYPE_CLASS[props.type ? props.type : ''],
            'at-button--circle': props.circle,
            'at-button--disabled': props.disabled,
            'at-button--full': props.full,
            'at-button--icon': props.loading,
            'at-button': true,
        }))

        const loadingColor = computed(() => props.type === 'primary' ? '#fff' : '')
        const loadingSize = computed(() => props.size === 'small' ? '30' : '0')

        function handleClick(event) {
            if (!props.disabled) {
                props.onClick && props.onClick(event)
            }
        }

        function handleGetUserInfo(event) {
            props.onGetUserInfo && props.onGetUserInfo(event)
        }

        function handleGetPhoneNumber(event) {
            props.onGetPhoneNumber && props.onGetPhoneNumber(event)
        }

        function handleOpenSetting(event) {
            props.onOpenSetting && props.onOpenSetting(event)
        }

        function handleError(event) {
            props.onError && props.onError(event)
        }

        function handleContact(event) {
            props.onContact && props.onContact(event)
        }

        function handleLaunchapp(event) {
            props.onLaunchapp && props.onLaunchapp(event)
        }

        function handleGetRealNameAuthInfo(event) {
            props.onGetRealnameAuthInfo && props.onGetRealnameAuthInfo(event)
        }

        function handleGetAuthorize(event) {
            props.onGetAuthorize && props.onGetAuthorize(event)
        }

        function handleSubmit(event) {
            if (isWEAPP || isWEB) {
                // 已知问题：https://github.com/NervJS/taro-ui/issues/96
                Taro.eventCenter.trigger('submit', event.detail, {
                    bubbles: true,
                    composed: true,
                })
            }
        }

        function handleReset(event) {
            if (isWEAPP || isWEB) {
                // 已知问题：https://github.com/NervJS/taro-ui/issues/96
                Taro.eventCenter.trigger('reset', event.detail, {
                    bubbles: true,
                    composed: true,
                })
            }
        }

        interface miniAppEventHandleProps {
            error?: typeof props.onError
            onContact?: typeof props.onContact
            onOpenSetting?: typeof props.onOpenSetting
            getphonenumber?: typeof props.onGetPhoneNumber
            getuserinfo?: typeof props.onGetUserInfo
            onLaunchapp?: typeof props.onLaunchapp
        }

        function getWxButtonProps(): miniAppEventHandleProps {
            if (!props.openType) return {}

            const wxButtonProps: miniAppEventHandleProps = { error: handleError }

            switch (props.openType) {
                case 'contact':
                    wxButtonProps.onContact = handleContact
                    break
                case 'openSetting':
                    wxButtonProps.onOpenSetting = handleOpenSetting
                    break
                case 'getPhoneNumber':
                    wxButtonProps.getphonenumber = handleGetPhoneNumber
                    break
                case 'getUserInfo':
                    wxButtonProps.getuserinfo = handleGetUserInfo
                    break
                case 'launchApp': wxButtonProps.onLaunchapp = handleLaunchapp
                default:
                    break
            }

            return wxButtonProps
        }

        const webButton = h(Button, {
            class: 'at-button__wxbutton',
            lang: props.lang,
            formType: props.formType === 'submit' || props.formType === 'reset' ? props.formType : undefined
        })

        const miniAppButton = h(Button, {
            class: 'at-button__wxbutton',
            formType: props.formType,
            openType: props.openType,
            lang: props.lang,
            sessionFrom: props.sessionFrom,
            sendMessageTitle: props.sendMessageTitle,
            sendMessagePath: props.sendMessagePath,
            sendMessageImg: props.sendMessageImg,
            showMessageCard: props.showMessageCard,
            appParameter: props.appParameter,
            ...{ on: getWxButtonProps() }
        })

        return () => (
            h(View, mergeProps(attrs, {
                class: rootClasses.value,
                onTap: handleClick
            }), [
                isWEB && !props.disabled && webButton,

                isWEAPP && !props.disabled && h(Form, {
                    onSubmit: handleSubmit,
                    onReset: handleReset
                }, [miniAppButton]),

                isALIPAY && !props.disabled && miniAppButton,

                props.loading && h(View, {
                    class: 'at-button__icon'
                }, [
                    h(AtLoading, {
                        color: loadingColor.value,
                        size: loadingSize.value
                    })
                ]),

                h(View, { class: 'at-button__text' }, slots.default && slots.default())
            ])
        )
    }
})

export default AtButton
