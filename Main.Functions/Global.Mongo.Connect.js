class Mongoose {
    static Connect(active = true, url = sistem.MongoURL) {
        if(active) {
            require('mongoose').connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            }).then(() => {
                console.log("[MongoDB] Bağlantı Başarıyla Kuruldu!")
            }).catch((err) => {
                console.log("[MongoDB] veritabanına bağlantı sağlanamadı!\n" + err, "error");
            });
        }
    }
}

module.exports = { Mongoose }