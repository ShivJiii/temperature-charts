import React, { Fragment, useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

const TemperatureMeasure = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  const [value, onChange] = useState([
    new Date(),
    new Date(year, month, day + 7),
  ]);
  const [temprature, setTemprature] = useState([]);
  const diffTime: any = Math.abs(value[0].getTime() - value[1].getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const onChangeDate = (val: any) => {
    onChange(val);
  };
  useEffect(() => {
    let temp = [];
    for (let i = 0; i < diffDays; i++) {
      temp.push(Math.floor(Math.random() * 55) + 1);
    }
    setTemprature(temp);
  }, [diffDays]);

  const options = {
    title: {
      text: "Environmental Temperature",
    },

    yAxis: {
      title: {
        text: "Average Temparature",
      },
      labels: {
        format: "{value}°C",
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: "Range: 2010 to 2017",
      },
      labels: {
        format: `{value}/${value[0].getMonth() + 1}`,
      },
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        title: "adsf",
        label: {
          // title: `${value[0].getDate()}/${value[0].getMonth()}`,
        },
        pointStart: value[0].getDate(),
      },
    },

    series: [
      {
        name: "Temperature",
        data: [...temprature],
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
        <DateRangePicker
          closeCalendar={true}
          clearIcon={null}
          onChange={onChangeDate}
          value={value}
        />
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Fragment>
  );
};

export default TemperatureMeasure;
