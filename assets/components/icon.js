import iconsset from '../icons/icons.json' assert { type: 'json' };

export default (icon) => ({
    icon,
    init() {
        const icon = iconsset.icons[this.icon]
        this.$el.setAttribute('viewBox',`0 0 ${icon.width || 24} ${icon.height || 24}`)
        this.$el.innerHTML = icon.body
    },
})
