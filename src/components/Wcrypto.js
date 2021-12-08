import React from 'react'
import styled from 'styled-components'

const Wcrypto = () => {
    return (
        <Main>
                <div>
                    <P>
                    A cryptocurrency, crypto-currency, or crypto is a collection of binary data which is designed to work as a medium of exchange.
                     Individual coin ownership records are stored in a ledger, which is a computerized database using strong
                      cryptography to secure transaction records, to control the creation of additional coins, and to verify 
                      the transfer of coin ownership.[1][2][3] Cryptocurrencies are generally fiat currencies, as they are not
                       backed by or convertible into a commodity.[4] Some crypto schemes use validators to maintain the cryptocurrency.
                        In a proof-of-stake model, owners put up their tokens as collateral. 
                    In return, they get authority over the token in proportion to the amount they stake.
                     Generally, these token stakers get additional ownership in the token over time via network fees,
                      newly minted tokens or other such reward mechanisms.

Cryptocurrency does not exist in physical form (like paper money) and is typically not issued by a 
central authority. Cryptocurrencies typically use decentralized control as opposed to a central bank digital 
currency (CBDC). When a cryptocurrency is minted or created prior to issuance or issued by a single issuer,
 it is generally considered centralized. When implemented with decentralized control, each cryptocurrency works 
 through distributed ledger technology, typically a blockchain, that serves as a public financial transaction 
 database.

A cryptocurrency is a tradable digital asset or digital form of money, built on blockchain technology 
that only exists online. Cryptocurrencies use encryption to authenticate and protect transactions, hence their
 name. There are currently over a thousand different cryptocurrencies in the world, and many see them as the key
  to a fairer future economy.
Bitcoin, first released as open-source software in 2009, is the first decentralized cryptocurrency.
 Since the release of bitcoin, many other cryptocurrencies have been created.
                    </P>
                </div>
        </Main>
        
    )
}
const Main = styled.div`
padding-top:30%;
padding-left:2%;
padding-right:2%;


`;
const P = styled.p`
font-size:25px;
`;

export default Wcrypto
