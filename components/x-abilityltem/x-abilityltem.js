// components/x-abilityltem/x-abilityltem.js
// components/x-warehome/x-warehome.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    functionItem:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    isDelete:false

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _deleteItem:function(){
      console.log("长按触发");
      this.setData({
        isDelete: true
      })
      console.log(this)
    }
  }
})