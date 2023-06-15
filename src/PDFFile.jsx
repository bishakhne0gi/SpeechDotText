
import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
const styles = StyleSheet.create(
    {
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    }
)
const PDFFile = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>lorem</Text>
                </View>
                <View style={styles.section}>
                    <Text>ipsum</Text>
                </View>
            </Page>
        </Document>
    )
}

export default PDFFile