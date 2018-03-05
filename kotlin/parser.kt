
//--- parse json to data type directly

//compile 'com.google.code.gson:gson:2.8.0'
val jsonStr="""
    {
     "name": "Aanand Shekhar",
     "age": 21,
     "isAwesome": true
    }
""".trimIndent()

data class Information(val name:String,val age:Int, val isAwesome:Boolean)
val information:Information= Gson().fromJson<Information>(jsonStr,Information::class.java)

