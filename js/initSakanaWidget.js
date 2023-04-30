function initSakanaWidget() {
new SakanaWidget({ character: 'takina', controls: false }).setState({ i: 0.0005, d: 1 }).mount('#sakana-widget-takina');
new SakanaWidget({ character: 'chisato', controls: false }).setState({ i: 0.0005, d: 1 }).mount('#sakana-widget-chisato');
}