export default (actor, klass='h-6 w-6') => ({
  actor,
  icon:'',
  label:'',
  color:null,
  klass,
  init() {
    [this.icon, this.label, this.color] = [...this.actor.split(':'), ...[null,null]]
    console.log('COLOR',this.color)
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