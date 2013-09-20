(function($,w,d){	
	
	var mymethods = {
		init :function(options,elem){
			var self = this;			
			self.elem = elem;
			self.$elem = $(elem);
			
			if (typeof(options) === 'string' && typeof options){
				self.color = options;
			}else if(typeof(options) === 'object' && typeof(options)){
				self.color = options.bgcolor;
				self.opts = $.extend({},$.fn.highlighter.options,options);
			}

			self.selected = w.getSelection();
			self.selectedtxt = self.selected.toString();
		
			self.matchtext();
			
			
			
			
		},
		matchtext:function(){
			var self = this;
			self.$elem.html(self.$elem.html().replace(self.selectedtxt,"<span class='selected'>"+self.selectedtxt+"</span>"));
			
			
				$('span.selected').on('click',function(){
				
					alert('hello');
				})
			
			
			if(self.color){			
				$('span.selected').css({
					'background-color':self.color,
					'color':self.opts.textcolor
				});
			}
		},
		createEl : function(){
		var self = this;
			
			var spn = $("<span>",{class:"selected",text:self.selectedtxt}).hover(function(){alert('hello india');});
			if(self.color)
			$('span.selected').css({
					'background-color':self.color,
					'color':self.opts.textcolor
				});
			return spn;
		}
	}
	
	$.fn.highlighter = function(options){
			
		return this.each(function(){
		
			var myhighlighter = Object.create(mymethods);
			myhighlighter.init(options,this);
		})
	};
	
	$(window).on('beforeunload', function() {
		if($('span.selected').length >0){
			return 'You have selected some text...';
		}
	});
	$.fn.highlighter.options = {
		bgcolor:'yellow',
		textcolor:'black'
	};

})(jQuery,window,document);
