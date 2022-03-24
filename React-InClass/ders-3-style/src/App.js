import Card from "./components/card/Card";
import Inline from "./components/inline-style/Inline";
import ModuleBtn from "./components/moduleCss/ModuleBtn";
import StyleSheet from "./components/regular-style/StyleSheet";
import data from "./data";
const App = () => {
  return (
    <>
 <Inline/>
    <StyleSheet secenek={false}/>
  <Card veri={data}/>
<ModuleBtn btnStyle="birinci" btnName="Kaydet"/>
<ModuleBtn btnStyle="ikinci" btnName="Sil"/>
{/* ekrana bastırmak istediğimiz componentler burada, props lar buradan yollanıyor */}
    </>
  );
};

export default App;
