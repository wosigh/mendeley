enyo.kind({
	name: 'DrawerItem',
	kind: 'Item',
	layoutKind: 'HFlexLayout',
	align: 'center',
	tapHighlight: true,
	
	published: {
		label: '',
		disabled: false,
		count: 0,
	},
	
	components: [
		{name: 'icon', className: 'icon'},
		{name: 'text', flex: 1, style: 'font-size: 90%;'},
		{name: "count", className: "folder-count", showing: false}
	],
	
	rendered: function() {
		this.$.icon.addClass(this.icon)
		this.$.text.setContent(this.label)
		if (this.count) {
			this.$.count.setContent(this.count)
			this.$.count.setShowing(true)
		} else {
			this.$.count.setShowing(false)
		}
	},
	
})