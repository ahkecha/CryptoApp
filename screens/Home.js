import React from 'react';
import {
    View,
    Text
} from 'react-native';
import{connect} from "react-redux";
import {getHoldings, getCoinMarket} from "../stores/market/marketActions";
import {useFocusEffect} from "@react-navigation/native";
import { MainLayout } from "./";
import {BalanceInfo} from "../components";

import {SIZES, COLORS, FONTS, dummyData, icons } from "../constants";



const Home = ({getHoldings, getCoinMarket, myHoldings, coins }) => {

    useFocusEffect(
        React.useCallback(() => {
            getHoldings(holdings = dummyData.holdings)
            getCoinMarket()
        }, [])
    )
        function renderWalletInfoSection() {
            return (
                <View
                    style={{
                        paddingHorizontal: SIZES.padding,
                        borderBottomLeftRadius: 25,
                        borderBottomRightRadius: 25,
                        backgroundColor: COLORS.gray
                    }}
                >
                    {/* Wallet Balance */}
                    <BalanceInfo 
                        title="My wallet"
                        displayAmount="45,000"
                        changPct="2.30"
                        containerStyle={{
                            marginTop: 50
                        }}
                    />

                    {/* Buttons */}
                
                </View>
            )
        }

    return (
        <MainLayout>
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.black
            }}
        >
            {/*Header*/}
            {renderWalletInfoSection()}
            {/*Chart */}
            {/*Footer*/}
            <Text>Home</Text>
        </View>
        </MainLayout>
    )
}

//export default Home;

function mapStateToProps(state) {
    return {
        myHoldings: state.marketReducer.myHoldings,
        coins: state.marketReducer.coins
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getHoldings: (holdings, currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page) => {
            return dispatch(getHoldings(holdings, currency, coinList, orderBy, sparkline, priceChangePerc,perPage, page)) },
            getCoinMarket: (currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page) => {
                return dispatch(getCoinMarket(currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page))
            }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Home);