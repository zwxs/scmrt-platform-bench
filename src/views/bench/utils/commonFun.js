class Model {
    getUrlParmas(key) {
        let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i"); 
        let r = window.location.search.substr(1).match(reg)
        if (r != null) {
            return r[2]
        }
        return null
    }
    setCookie = (cname, cvalue, exHours) => {
        let d = new Date()
        d.setTime(d.getTime() + (exHours * 60 * 60 * 1000))
        let expires = 'expires=' + d.toGMTString()
        document.cookie = cname + '=' + cvalue + '; ' + expires
    }
    getCookie = (cname) => {
        let name = cname + '='
        let ca = document.cookie.split(';')
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim()
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
        }
        return ''
    }
}
export default new Model()