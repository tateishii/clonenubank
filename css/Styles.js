import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
    },
    header:{
        height:140,
        backgroundColor: '#8303d2',
        width: '100%',
    },
    headerIcon:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingLeft:22,
        paddingRight:25,
    },
    headerRight:{
        flexDirection: "row",
        gap:30,
        paddingTop:60,
    }, 
    headerIconUser:{
        backgroundColor:"#9e29e7",
        padding: 15,
        borderRadius: 100,
        marginTop:46,
    },
    txtuser:{
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop:15
    },
    money:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight:30,
        paddingTop:25,
    },
    account:{
        flex: 0.2,
        backgroundColor: "#ffff",
        width:'100%',
        paddingLeft:20
    },
    txtconta:{
        fontWeight: 'bold',
        fontSize: 16,
    },  
    dinheiro:{
        marginLeft:6,
        marginTop:10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    nav:{
        flex: 0.2,
        backgroundColor: "#ffff",
        width: '100%',
        flexDirection: 'row',
      
    },
    navitemicon:{
        backgroundColor: '#EFEFEF',
        padding:22,
        borderRadius:50,
        width:70,  
    },
    navitem:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 110,
    },
    txticons:{
        fontWeight: 'bold',
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    imgPix:{
        width:20,
        height:20,
    },
    card:{
        flex: 1,
        width: '85%',
        backgroundColor: '#efefef',
        flexDirection: 'row',
        padding:15,
        justifyContent:'flex-start',
        alignItems:'center',
        borderRadius:10,
        paddingLeft:20,
        marginTop:20,
        marginBottom:20,
        marginLeft:25,
        
    },
    textCard:{
        fontWeight: 'bold',
        fontSize:15,
        marginLeft:50,
    },
    message:{
        flex: 0.2,
        width:'100%',
        flexDirection: 'row',
        borderRadius:20,
    },
    cxmsg:{
        width:'20%',
        backgroundColor: '#efefef',
        borderRadius:20,
        padding: 30,
        alignItems: 'center',
        marginRight:1,
        marginLeft:25,
        marginTop:10,
    },
    txtmsg:{
        fontSize: 15,
    },
    txtfatura:{
        marginLeft:6,
        color: '#818490',
        marginTop: 6,
    },
    dinheirocard:{
        fontWeight:'bold',
        fontSize: 16,
        marginTop:4,
        marginLeft:6,
    },
    txtSpan:{
        color: '#A755DB',
    },
    limite:{
        fontWeight:'bold'
    },
    txtparcel:{
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop:20,
    },
    footer:{},

    // Margem de 20 pixels para todos os lados
    margin20:{
        margin:20,
    },
    
    // Margem de 30 pixels para todos os lados
    margin30:{
        margin:30,
    },

})