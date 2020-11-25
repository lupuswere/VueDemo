render () {
    return Vue.h('input', {
        onClickCapture: this.doThisInCapturingMode,
        onKeyupOnce: this.doThisOnce,
        onMouseoverOnceCapture: this.doThisOnceInCapturingMode
    })
}