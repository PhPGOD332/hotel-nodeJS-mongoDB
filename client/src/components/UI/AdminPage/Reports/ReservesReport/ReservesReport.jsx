import React, {useEffect, useState} from 'react';
import {Document, Page, View, StyleSheet, Text, Font} from "@react-pdf/renderer";



Font.register({
    family: 'Roboto',
    src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf'
})

const styles = StyleSheet.create({
    document: {
        fontFamily: 'Roboto'
    },
    page: {
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    section: {
        margin: '10px',
        padding: '10px',
        flexGrow: '1'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '28px',
        marginBottom: '25px'
    },
    table: {
        display: 'table',
        width: '100%',
        marginBottom: '50px',
        gap: '0'
    },
    tableRow: {
        margin: 'auto',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    tableCell: {
        display: 'flex',
        margin: '0',
        padding: '5px',
        fontSize: '10px',
        border: '1px solid #000',
        width: '25%',
        flexWrap: 'wrap',
        height: '100%'
    },
    innerCell: {
        textAlign: 'center',
        flexWrap: 'wrap'
    },
    tableID: {
      width: '10%'
    },
    tableHeader: {
        margin: '0',
        padding: '5px',
        fontWeight: 'bold',
        border: '1px solid #000',
        width: '25%',
        fontSize: '14px'
    },
    totalTitle: {
        textAlign: 'left',
        width: '85%'
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: '13px'
    }
});

const ReservesReport = ({dates, tableData, totalPrice}) => {

    return (
        <Document language='ru' style={styles.document}>
            <Page size='A4' style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>
                        Отчет "Бронирования" с {new Date(dates.dateStart).toLocaleDateString()} по {new Date(dates.dateEnd).toLocaleDateString()}
                    </Text>
                    {tableData
                        ?
                        <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <View style={[styles.tableHeader, styles.tableID]}>
                                    <Text style={styles.innerCell}>№</Text>
                                </View>
                                <View style={styles.tableHeader}>
                                    <Text style={styles.innerCell}>Комната</Text>
                                </View>
                                <View style={styles.tableHeader}>
                                    <Text style={styles.innerCell}>Дата заезда</Text>
                                </View>
                                <View style={styles.tableHeader}>
                                    <Text style={styles.innerCell}>Дата выезда</Text>
                                </View>
                                <View style={styles.tableHeader}>
                                    <Text style={styles.innerCell}>Цена</Text>
                                </View>
                            </View>
                            { tableData.map((reserve, index) =>
                                <View key={reserve._id} style={styles.tableRow}>
                                    <View style={[styles.tableCell, styles.tableID]}>
                                        <Text style={styles.innerCell}>{index + 1}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text style={styles.innerCell}>{reserve.room.title}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text style={styles.innerCell}>{new Date(reserve.dateStart).toLocaleDateString()}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text style={styles.innerCell}>{new Date(reserve.dateEnd).toLocaleDateString()}</Text>
                                    </View>
                                    <View style={styles.tableCell}>
                                        <Text style={styles.innerCell}>{reserve.price.toLocaleString()} р.</Text>
                                    </View>
                                </View>
                            ) }
                            <View style={styles.tableRow}>
                                <View style={[styles.tableCell, styles.totalTitle]}>
                                    <Text style={styles.innerCell}>ИТОГО:</Text>
                                </View>
                                <View style={styles.tableCell}>
                                    <Text style={styles.innerCell}>{totalPrice.toLocaleString()} р.</Text>
                                </View>
                            </View>
                        </View>
                    :
                    <Text style={styles.text}>За данный период бронирований не было</Text>
                    }

                    <View style={styles.footer}>
                        <Text style={styles.text}>Руководитель отеля: _______________</Text>
                        <Text style={styles.text}>Подпись: ______________</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default ReservesReport;