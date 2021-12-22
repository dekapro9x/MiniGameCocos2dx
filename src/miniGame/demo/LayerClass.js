var Objs = {
  Square: null,
};
var GameClassLayerDemoEventHandle = cc.Layer.extend({
  ctor: function () {
    this._super();
    this.init();
    this.renderImgStartGameBnt();
    var listenerEvent = cc.EventListener.create({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        console.log("Event ấn chuột:", event);
        const { _point } = touch;
        console.log("Đã nghe thấy sự kiện ấn chuột", _point);
        const { x, y } = _point;
        console.log("Vị trí ấn chuột:", x, y);
      },
      onTouchMoved: function (touch, event) {},
      onTouchEnded: function (touch, event) {},
    });
    cc.eventManager.addListener(listenerEvent, this.startGameBtn);
  },
  update: function (dt) {
    console.log("update ddiiii")
  },
  checkCollision: function () {},
  onTouchBegan: function (touch, event) {},
  onTouchMoved: function (touch, event) {},
  addTexts: function () {},
  SoundClicked: function () {},
  addSquares: function () {},
  generateDirection: function () {},
  renderImgStartGameBnt: function () {
    this.startGameBtn = cc.Sprite.create(res.StartGameBnt_png);
    this.startGameBtn.setPosition(0, 0);
    this.startGameBtn.setContentSize(cc.size(0, 0));
    this.startGameBtn.setScale(0.75, 0.5);
    this.startGameBtn.setAnchorPoint(cc.p(0.5, 0.5));
    this.addChild(this.startGameBtn, 0);
  },
});

