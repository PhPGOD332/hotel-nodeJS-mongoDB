import React, {useContext, useEffect, useState} from 'react';
import Popup from "../../../UI/Popup/Popup";
import {AdminContext} from "../AdminMain";
import ReservesReport from "../../../UI/AdminPage/Reports/ReservesReport/ReservesReport";
import {PDFViewer} from "@react-pdf/renderer";
import ReserveService from "../../../../services/reserve-service";

const Reports = () => {
    const { togglePopup, showPopup, popupContent } = useContext(AdminContext);

    const [showPDF, setShowPDF] = useState(false);
    const [dates, setDates] = useState({
        dateStart: new Date(),
        dateEnd: new Date()
    });
    const [tableData, setTableData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    function datesChange(type, value) {
        if (type === 'start') {
            setShowPDF(false);
            setDates({...dates, dateStart: value});
        } else if (type === 'end') {
            setShowPDF(false);
            setDates({...dates, dateEnd: value});
        }
    }

    async function createReservesReport() {
        const datesInfo = dates;
        const response = await ReserveService.getReservesByDates(datesInfo);
        const reserves = response.data;

        if (reserves.length) {
            console.log(reserves)
            const total = reserves.reduce((prev, next) => {
                return prev + next.price
            }, 0);

            console.log(total)
            setTotalPrice(total);
            setTableData(reserves);
        }

        setShowPDF(true);
    }

    function popupInner(content) {
        const type = Object.keys(content)[0];

        if (type === 'reserves') {
            const dates = content[type];

            return (
                <div className='popup-content'>
                    <span className="title" style={{marginBottom: '15px'}}>Выберите диапазон дат, за которые хотите сформировать отчет.</span>
                    <div className="dates-block" style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '15px'}}>
                        <input type="date" className='input-text' onChange={(e) => {
                            datesChange('start', e.target.value)
                        }}/>
                        <input type="date" className='input-text' onChange={(e) => {
                            datesChange('end', e.target.value)
                        }}/>
                    </div>
                    <div className="btn-block" style={{display: 'flex', justifyContent: 'center'}}>
                        <button className="OrangeBtn" onClick={() => {
                            setShowPDF(false);
                            createReservesReport();
                            togglePopup(false);
                        }}>Сформировать</button>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='wrapper'>
            <div className="title-block" style={{borderBottom: '1px solid #fff', paddingBottom: '15px'}}>
                <span className="section-title">Отчетность</span>
            </div>
            <div className="btns-block" style={{marginBottom: '20px'}}>
                <button className='OrangeBtn' onClick={() => {
                    setShowPDF(false);
                    togglePopup(true, { reserves: '' });
                }}>Бронирования</button>
            </div>
            {
                showPDF
                &&
                <PDFViewer width='100%' height='1050px'>
                    <ReservesReport dates={dates} tableData={tableData} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
                </PDFViewer>
            }
            <Popup state={showPopup ? 'visible' : 'invisible'} toggle={togglePopup}>
                {
                    popupInner(popupContent)
                }
            </Popup>
        </div>
    );
};

export default Reports;