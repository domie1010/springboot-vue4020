const base = {
    get() {
        return {
            url : "http://localhost:8080/dongwulingyangpingtai/",
            name: "dongwulingyangpingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/dongwulingyangpingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "动物领养平台"
        } 
    }
}
export default base
