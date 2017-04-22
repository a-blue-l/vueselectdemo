//全局注册
Vue.component("custom-select",{
	data: function(){
		return {
			selectShow: false,
			val:""
		}
	},
	props: ['btnValue','list'],
	template: `<section class="selectbox">
			<div class="searchtit">
				<div class="topdiv">
					<input type="text" id="search" :value="val" @click="selectShow = !selectShow" >
					<input type="button" id="button" :value="btnValue">
					<span class="searchbtn"></span>
				</div>
				<custom-list v-show="selectShow" :list=list v-on:recive="selectChange"></custom-list>
			</div>
		</section>`,
	methods: {
		selectChange: function(item){
			this.val = item;
		}
	}
})

Vue.component("custom-list",{
	props: ['list'],
	template: `<ul class="selectlist">
					<li v-for="item in list" @click="selectHandle(item)">{{ item }}</li>
				</ul>`,
	methods: {
		selectHandle: function( item ){
			this.$emit( "recive", item );
		}
	}
})

var data = {
	list1: [ '北京', '上海', '杭州' ],
	list2: [ '2017-01-23', '2017-05-12', '2017-07-13' ]
}

var vm = new Vue({
	el: '.app',
	data: data
	// 局部注册
	// components: {}
})