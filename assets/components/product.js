export default (product, klass='h-6 w-6') => ({
  product,
  icon:'',
  label:'',
  color:null,
  klass,
  init() {
    [this.icon, this.label, this.color] = [...this.product.split(':'), ...[null,null]]
    if(!this.label) this.label = this.icon.charAt(0).toUpperCase() + this.icon.slice(1);
    this.$el.classList.add('flex', 'flex-col', 'items-center')
    this.$nextTick(() => {
      this.$el.innerHTML = `<div class="${this.klass}">
        <svg x-data="Icon('${this.icon}')" class="h-full w-full text-${this.color}"></svg>
      </div>
      <small>${this.label}</small>`
    })
  }
})