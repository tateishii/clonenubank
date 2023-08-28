import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import {styles} from './css/Styles';

import { Feather, MaterialCommunityIcons, SimpleLineIcons, AntDesign, MaterialIcons, Entypo, FontAwesome, FontAwesome5, Fontisto, Octicons } from '@expo/vector-icons'; 


export default function App() {
  return (

    <View style={styles.screen}>
      <ScrollView horizontal={false}>
      <View style={styles.header}>

        <View style={styles.headerIcon}>

        <View style={styles.headerIconUser}>
          <Feather name='user' size={18} color="white"/>
        </View>
        <View style={styles.headerRight}>
          <SimpleLineIcons name="eye" size={20} color="white"/>
          <AntDesign name='questioncircleo' size={18} color="white"/>
          <MaterialCommunityIcons name="email-plus-outline" size={18} color={"white"}/>
        </View>


        </View>  
        <Text style={styles.txtuser}>Olá, Nicolas!</Text>
      </View>
    
      <View style={styles.account}>
        <View style={styles.money}>
          <Text style={styles.txtconta}>Conta</Text>
          <View>
          <Feather name='chevron-right' size={16} color="black"/>
          </View>
        </View>
        <Text style={styles.dinheiro}>R$ 800,25</Text>
      </View>

   
      <View style={styles.nav}>
      <ScrollView horizontal={true}>
        <View style={styles.navitem}>
          <Octicons style={styles.navitemicon} name="diamond" size={24} color="black" />
          <Text style={styles.txticons}>Pix</Text>
        </View>
        

        <View style={styles.navitem}>
          <MaterialCommunityIcons style={styles.navitemicon} name="barcode" size={24} color="black" />
          <Text style={styles.txticons}>Pagar</Text>
        </View>

        <View style={styles.navitem}>
          <Entypo style={styles.navitemicon} name="swap" size={24} color="black" />
          <Text style={styles.txticons}>Transferir</Text>
        </View>

        <View style={styles.navitem}>
          <MaterialIcons style={styles.navitemicon} name="attach-money" size={24} color="black" />
          <Text style={styles.txticons}>Depositar</Text>
        </View>

        <View style={styles.navitem}>
          <FontAwesome style={styles.navitemicon} name="handshake-o" size={24} color="black" />
          <Text style={styles.txticons}>
            Pegar Emprestimo
          </Text>
        </View>

        <View style={styles.navitem}>
          <FontAwesome5 style={styles.navitemicon} name="running" size={24} color="black" />
          <Text style={styles.txticons}>Cobrar</Text>
        </View>

        <View style={styles.navitem}>
          <Entypo style={styles.navitemicon} name="bar-graph" size={24} color="black" />
          <Text style={styles.txticons}>Investir</Text>
        </View>

        <View style={styles.navitem}>
          <FontAwesome5 style={styles.navitemicon} name="hand-holding-heart" size={24} color="black" />
          <Text style={styles.txticons}>Doação</Text>
        </View>

        <View style={styles.navitem}>
          <Fontisto style={styles.navitemicon} name="world-o" size={24} color="black" />
          <Text style={styles.txticons}>Transferencia Internacional</Text>
        </View>
        </ScrollView>
      </View>
   

      <View style={styles.card}>
        <MaterialCommunityIcons name="credit-card-multiple-outline" size={24} color="black" />
        <Text style={styles.textCard}>Meus cartões</Text>
      </View>
      
      <View style={styles.message}>
      <ScrollView horizontal={true}>
        <View style={styles.cxmsg}>
          <Text style={styles.txtmsg}>
            E você, o que fazer com seu <Text style={styles.txtSpan}>Pedacinho?</Text> Decida agora!
          </Text>
        </View>

        <View style={styles.cxmsg}>
          <Text style={styles.txtmsg}>
            <Text style={styles.txtSpan}>Você pediu e elas chegaram:</Text> conheça as Caixinhas!
          </Text>
        </View>

        <View style={styles.cxmsg}>
          <Text style={styles.txtmsg}>
          Chegou o <Text style={styles.txtSpan}>débito automatico de fatura de cartão.</Text>
          </Text>
        </View>
        
        </ScrollView>
      </View>

      
      
        <View style={styles.account}>
        <View style={styles.money}>
          <Text style={styles.txtconta}>Cartão de crédito</Text>
          <View>
          <Feather name='chevron-right' size={16} color="black"/>
          </View>
        </View>
        <Text style={styles.txtfatura}>Fatura atual</Text>
        <Text style={styles.dinheirocard}>R$ 680,40</Text>
        <Text>Limite disponivel de <Text style={styles.limite}>••••••••</Text></Text>
      </View>
      <View style={styles.parcelar}>
        <Text style={styles.txtparcel}>Parcelar compras</Text>
      </View>
      </ScrollView>
      <StatusBar style="auto"/>
    </View>
  );
}

