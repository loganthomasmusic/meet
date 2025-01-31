import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import { useEffect, useState } from "react";

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);

    const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];

    useEffect(() => {
        setData(getData());
    }, [`${events}`]);

    const getData = () => {
        const data = genres.map((genre) => {
            const filteredEvents = events.filter((event) =>
                event.summary.includes(genre)
            );
            return {
                name: genre,
                value: filteredEvents.length,
            };
        });
        return data;
    };

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        outerRadius,
        percent,
        index,
    }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
            <text
                x={x}
                y={y}
                fill="#635274"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
            </text>
        ) : null;
    };

    const colors = ["#997a8d", "#aa98a9", "#b39eb5", "#777696", "#796878"];

    return (
        <ResponsiveContainer width="99%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={130}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={colors[index]}
                            text={colors[index]}
                        />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default EventGenresChart;