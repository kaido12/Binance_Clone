import { useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import Graph from "./Graph";
import { useEffect, useState } from "react";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const CoinChart = () => {

  const params = useParams();
  const [coinData, setCoinData] = useState(null);

  const fetchCoinData = async () => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.coinId}/market_chart?vs_currency=usd&days=7`);
    // console.log(response)
    setCoinData(response.data);
  };

  useEffect(() => {
    fetchCoinData();
  }, [params.coinId]);

  if (!coinData) {
    return (
      <div className="flex justify-center px-32 mt-8">
        <Graph className="h-72 w-full px-32 mb-10" />
      </div>
    );
  }

  const coinChartData = coinData.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));

  const options = {
    responsive: true
  }
  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: params.coinId,
        data: coinChartData.map(val => val.y),
        borderColor: 'rgb(222, 36, 15)',
        backgroundColor: 'rgba(248, 40, 21, 0.5)',
      }
    ]
  }

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  )
}

export default CoinChart;
