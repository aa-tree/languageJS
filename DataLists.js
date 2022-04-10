export default class DataLists {
    constructor()
    {

    }

    get_stateArray(lang)
    {
        if(lang=="hi")
        {
            var state_list=["अंडमान और निकोबार द्वीप समूह","आंध्र प्रदेश","अरुणाचल प्रदेश","असम","बिहार","चंडीगढ़","छत्तीसगढ़","दादरा और नगर हवेली और दमन और दीव","गोवा","गुजरात","हरियाणा","हिमाचल प्रदेश","जम्मू और कश्मीर","झारखंड","कर्नाटक","केरल","लद्दाख","लक्षद्वीप","मध्य प्रदेश","महाराष्ट्र","मणिपुर","मेघालय","मिजोरम","नागालैंड","राष्ट्रीय राजधानी क्षेत्र दिल्ली","ओडिशा","पुदुचेरी","पंजाब","राजस्थान","सिक्किम","तमिलनाडु","तेलंगाना","त्रिपुरा","उत्तर प्रदेश","उत्तराखंड","पश्चिम बंगाल"];
        }
        else {
            var state_list=["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Haveli and Daman and Diu","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Ladakh","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","National Capital Territory of Delhi","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"];
        }

        return state_list;
    }

    stateName_toLang(lang, stateName)
    {
        if(!stringisEmpty(stateName))
        {
            stateName=stateName.trim()
            var state_english=get_stateArray("en");
            var state_lang=get_stateArray(lang);
            var index= state_english.indexOf(stateName);
            return state_lang[index];
        
        }
        else
        {
            return ""
        }
    }

    stateName_toEnglish(language, stateName)
    {
        if(language=="en" || language=="" || language =="null")
        {
            return stateName;
        }
  
        stateName=stateName.trim()
        var state_english=get_stateArray("en");
        var state_init_lang=get_stateArray(language);
        var index= state_init_lang.indexOf(stateName);
        return state_english[index];
    }

    findStateIndex(statename, lang="en")
    {
        
        var stateArray=this.get_stateArray(lang)

        for(let i=0;i<stateArray.length; i++)
        {
            if(stateArray[i]==statename)
            {
                return i
            }
        }

        return -1
    }

}