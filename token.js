if (process.env.NODE_ENV === 'production') {
    module.exports = {TOKEN:process.env.TOKEN, YOUTUBE:process.env.YOUTUBE}
} else {
    module.exports = {TOKEN:"OTQ0MDc2MzAyNTI3MzkzODEz.Yg8Vkg.A2Mv9lhRta1VCd-5pBFUmN9fE6w", YOUTUBE: "AIzaSyDlGG_bNw8jggtuYDXF0vOptGPBiTEFv0M"}
} 

