class gameover extends plane{
    constructor(options) {
        super({
            ...options,
            dom: document.createElement('div')
        })
        this.dom.className = 'gameover'
        let title = document.createElement('div')
        title.className = 'title'
        title.innerText = '游戏结束'
        this.dom.appendChild(title)
        let scoreDom = document.createElement('div')
        scoreDom.className = 'score'
        scoreDom.innerText = '分数：' + score
        this.dom.appendChild(scoreDom)
        let time = document.createElement('div')
        time.className = 'time'
        time.innerText = score > 200 ? '累进德瑞' : score > 120 ? '大佬666' : score > 50 ? '小伙子不错哦' : '小垃圾'
        this.dom.appendChild(time)
        let btn = document.createElement('button')
        btn.className = 'resetGame'
        btn.innerText = '重新开始'
        btn.onclick = () => {
            location.reload()
        }
        this.dom.appendChild(btn)
        document.body.appendChild(this.dom)
    }
}