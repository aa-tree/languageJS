import * as common_strings from './common_strings'
import DataLists from './DataLists'

class LanguageJS {
  constructor(customStrings)
  {
    this.customStrings= customStrings
    this.dataLists=new DataLists()
  }

  gSFC(code, lang="en")
  {
    if(!isValidLangCode(lang))
    {
      lang="en"
    }
    // If user has provided a custom file, read it and prefer it over default.
    if(this.customStrings!=null&&typeof this.customStrings!="undefined")
    {
      
      var toReturn=this.getCodeFromJSON(this.customStrings,code, lang)
      if(toReturn!=null&&toReturn!="")
      {
        return toReturn
      }
      else
      {
        return this.getCodeFromJSON(common_strings.allstrings,code,lang)  
      }
    

      
    }
    else
    {
      return this.getCodeFromJSON(common_strings.allstrings,code,lang)
    }
  }

  customGSFC(code, lang, variable)
  {
    var string= this.gSFC(code, lang)
    string= string.replace("%%VAR%%", variable)
    return string
  }
  
  getCodeFromJSON(jsonArray, code, lang="en") {
    var toReturn=""

    if (typeof jsonArray[code]!= "undefined" && typeof jsonArray[code][lang]!= "undefined")
    {
      
      toReturn= jsonArray[code][lang];
    }
    else {
      toReturn= "";
    }
    return toReturn
  }



}

export function isValidLangCode(lang)
{
  
  if(lang==""||lang == null)
  {
    return false
  }

  if(typeof(lang)!="string")
  {
    return false
  }

  return true
}
export default LanguageJS
