import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Back from '../../../assets/icons/backSvg';
import {SafeAreaView} from 'react-native-safe-area-context';
const About = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => navigation.goBack()}>
        <Back style={{marginLeft: '10%', marginRight: 30}} color="#ADABAB" />
        <Text style={{fontSize: 30, fontWeight: 'bold', marginVertical: '10%'}}>
          Аппын тухай
        </Text>
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={require('../../../assets/images/Merit.png')}
      />
      <Text style={styles.title}>START Test гэж юу вэ?</Text>
      <Text style={styles.text}>
        START Test application нь энэ төрлийн бусад апп-уудтай харьцуулахад
      </Text>
      <Text style={styles.textLine}>
        {'\t'}Төрийн албаны шалгалтад бэлдэгчдийн хэрэгцээ, шаардлагыг тооцон
        зөвхөн тест агуулаад зогсохгүй мэргэжлийн заавар зөвлөгөө, ангилал,
        төлөвлөгөө бүхий төрөл бүрийн сэдэвчилсэн хичээл, хэрэгцээт материал,
        хууль, дүрэм, журам, загвар, маягт, эх сурвалжуудыг НЭГ ДОР багтаасан,
        төрийн албаны үйл ажиллагаанд хэрэгтэй цаг үеийн мэдээ, мэдээллийг
        агуулсан байнгын шинэчлэлт, хөгжүүлэлт бүхий гарын авлага юм.{'\n'}
      </Text>
      <Text style={styles.textLine}>
        Энэхүү апп нь Материал, Хичээл, Шалгалт, Тест гэсэн үндсэн 4 хэсэгтэй
        бөгөөд:{'\n'}
      </Text>
      <Text style={styles.textLine}>
        {'\t'}1.Төрийн алба: Төрийн албаны шалгалтын тухай дүрэм, журам, заавар,
        анкет, маягт, хичээл{'\n'}
      </Text>
      <Text style={styles.textLine}>
        {'\t'}2.Монгол Улсын төрийн байгууллагууд, тогтолцоо{'\n'}
      </Text>
      <Text style={styles.textLine}>
        {'\t'}3.Ангилж системчлэгдсэн 50 гаруй хууль, дүрэм, журам, заавар{'\n'}
      </Text>
      <Text style={styles.textLine}>
        {'\t'}4.Шалгалт: Төрийн албаны шалгалтын жишгээр хугацаатай горимд
        шалгалт өгөх, алдаа, үр дүн, авсан оноогоо харах, асуултын дараалалд
        чөлөөтэй шилжих{'\n'}
      </Text>
      <Text style={styles.textLine}>
        {'\t'}5.Хичээл: Хууль, Монгол хэл бичиг, Архив албан хэрэг хөтлөлт,
        Компьютер, IQ, Монголын түүх соёл, нийгэм, эдийн засаг, ярилцлага зэрэг
        шалгалтын сэдэв тус бүрээр ангилсан хичээлийн бааз.{'\n'}
      </Text>
      <Text style={styles.textLine}>
        {'\t'}6.Тест: Хууль, Монгол хэл, Монгол бичиг, Компьютер, Архив, албан
        хэрэг хөтлөлт, IQ болон бусад тестийн сан буюу асуултын дараалалд
        чөлөөтэй шилжих, асуултаа сонгож хариуах, тестийн тоо, оноо, үр дүнгээ
        харах зэргээр дасгал ажиллах боломж{'\n'}
      </Text>
      <Text style={styles.textLine}>
        {'\t'}7.Төрийн албатай холбоотой мэдээлэл{'\n'}
      </Text>
      <Text style={styles.textLine}>
        {'\t'}8.Шалгалтын зар, бүртгүүлэх заавар зэрэг агуулгуудыг багтаасан
        {'\n'}
      </Text>
      <Text style={styles.footer}>START Test - ТАНД АМЖИЛТ АВЧИРНА.</Text>
    </ScrollView>
  );
};
export default About;
