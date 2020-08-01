import { h, defineComponent, toRefs, computed } from 'vue'
import classNames from 'classnames'
import { Text, View } from '@tarojs/components'
import { AtProgressProps } from 'types/progress'
import AtComponentWithDefaultProps from '../mixins'

const AtProgress = defineComponent({
    mixins: [AtComponentWithDefaultProps],

    props: {
        color: String as () => AtProgressProps['color'],
        status: String as () => AtProgressProps['status'],
        percent: Number as () => AtProgressProps['percent'],
        strokeWidth: Number as () => AtProgressProps['strokeWidth'],
        isHidePercent: Boolean,
    },

    setup(props: AtProgressProps, { slots }) {

        return () => {
            const { percent } = toRefs(props)

            if (typeof percent?.value !== 'number') {
                percent!.value = 0
            }

            if (percent!.value < 0) {
                percent!.value = 0
            } else if (percent!.value > 100) {
                percent!.value = 100
            }

            const rootClass = computed(() => classNames(
                'at-progress',
                {
                    [`at-progress--${props.status}`]: !!props.status
                },
                props.className
            ))

            const iconClass = computed(() => classNames('at-icon', {
                'at-icon-close-circle': props.status === 'error',
                'at-icon-check-circle': props.status === 'success'
            }))

            const progressStyle = computed(() => ({
                width: percent?.value && `${+percent?.value}%`,
                height: props.strokeWidth && `${+props.strokeWidth}px`,
                backgroundColor: props.color
            }))

            return (
                h(View, { class: rootClass.value }, {
                    default: () => [
                        h(View, { class: 'at-progress__outer' }, {
                            default: () => [
                                h(View, { class: 'at-progress__outer-inner' }, {
                                    default: () => [
                                        h(View, {
                                            class: 'at-progress__outer-inner-background',
                                            style: progressStyle.value
                                        })
                                    ]
                                })
                            ]
                        }),

                        !props.isHidePercent && (
                            h(View, {
                                class: 'at-progress__content'
                            }, (!status || status === 'progress')
                                ? `${percent}%`
                                : {
                                    default: () => [
                                        h(Text, { class: iconClass.value })
                                    ]
                                }
                            )
                        )
                    ]
                })
            )
        }
    }
})

export default AtProgress