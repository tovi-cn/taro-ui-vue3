import { h, defineComponent } from "vue"
import { View } from '@tarojs/components'

const AtCalendarHeader = defineComponent({
    name: "AtCalendarHeader",

    data: () => ({ addGlobalClass: true }),

    setup() {
        const days = ['日', '一', '二', '三', '四', '五', '六']

        return () => (
            h(View, {
                class: 'at-calendar__header header'
            }, [
                h(View, {
                    class: 'header__flex'
                }, days.map((day, index) => (
                    h(View, {
                        key: index,
                        class: 'header__flex-item'
                    }, day)
                )))
            ])
        )
    }
})

export default AtCalendarHeader