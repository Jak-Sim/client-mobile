import WebView from "react-native-webview";
import { SafeAreaView} from "react-native";
import Android from "@/styles/Android";

const Webview_test = () => {
  return (
    <SafeAreaView style={Android.AndroidSafeArea}>
      {/*<WebView source={{uri: 'https://jaksim-web.vercel.app/'}} />*/}
      <WebView source={{uri: 'https://naver.com/'}} />
    </SafeAreaView>
  );
};

export default Webview_test;

