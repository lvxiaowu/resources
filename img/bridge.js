var ACTION_BRIDGE_NOTICE = function(d) {

	var args = [d.type, JSON.stringify(d.data)]

	window.location.href =
		"app://action?id=" + new Date().getTime() + "&args=" + encodeURIComponent(JSON.stringify(args));
};
var ACTION_PAGE_BACK = function(n) {
	ACTION_BRIDGE_NOTICE({
		type: "pageBack",
		data: {
			num: n
		}
	});
};
history.go = (function(oriGoFunc) {
	return function() {
		if (arguments[0] > 0) oriGoFunc.call(history, Object.assign({},arguments))
		else ACTION_PAGE_BACK(arguments[0]);
	};
})(history.go);
history.back = (function() {
	return function() {
		ACTION_PAGE_BACK(-1);
	};
})(history.back);
window.addEventListener('message',function(e){
    var data=e.data;
    if(data&&data.type=="webviewclose"){
	console.log("webviewcloseF")
      history.back()
    }
},false);
console.log("注入 ACTION_BRIDGE_NOTICE 方法");



// if (typeof window != 'undefined') {
// 	console.log("注入window.os.notify  uniapp");
// 	if (typeof window.os == "undefined") {
// 		window.os = {
// 			notifyList: [],
// 			notify: function(a) {
// 				this.notifyList.push(a);
// 				this.noticeApp()
// 			},
// 			noticeApp: function() {
// 				var self = this;
// 				clearInterval(self.timer);
// 				self.timer = window.setInterval(function() {
// 					var a = self.notifyList.shift();
// 					window.location.href = a;
// 					if (!self.notifyList.length) {
// 						clearInterval(self.timer);
// 					}
// 				}, 50)

// 			}
// 		};
// 	}
// 	window.CHANGEBIRDGETIMERAPP = setInterval(() => {
// 		if (typeof Bridge != 'undefined') {
// 			Bridge.platform = 'android';
// 			clearInterval(window.CHANGEBIRDGETIMERAPP)
// 		}
// 	}, 10)
// }


if (typeof window.BridgeCallBack == "undefined") window.BridgeCallBack = function(id, data, isClick) {
	if (typeof Bridge != 'undefined') {
		if (isClick) {
			var f = Bridge.callbackCache[Number(id)];
			if (f) f(data)
		} else {
			const commandQueue = Bridge.commandQueue;
			var i = commandQueue.length - 1;
			while (i >= 0) {
				var item = commandQueue[i];
				if (item.id == id) {
					i = -1;
					if (item.callback) item.callback(data)
				}
				i--;
			}
		}


	}
}
