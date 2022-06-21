import React, { Fragment, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

const TemperatureMeasure = () => {

  const [value, onChange] = useState([new Date(), new Date()]);

  const onChangeDate = (val) => {
    onChange(val);
  };

  const options = {
    title: {
      text: "Environmental Temperature",
    },

    yAxis: {
      title: {
        text: "Total Temparature",
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2017",
      },
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: value[0].getFullYear(),
      },
    },

    series: [
      {
        name: "Temperature",
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <Fragment>
      <div className="date-picker-wrapper">
        <DateRangePicker onChange={onChangeDate} value={value} />
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Fragment>
  );
};

export default TemperatureMeasure;
