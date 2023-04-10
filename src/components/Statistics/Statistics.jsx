import React from 'react';
import { PieChart, Pie, Tooltip, } from 'recharts';

const Statistics = () => {

    const marks = [
        { name: 'Assignment-1', mark: 60 },
        { name: 'Assignment-2', mark: 59},
        { name: 'Assignment-3', mark: 60},
        { name: 'Assignment-4', mark: 59 },
        { name: 'Assignment-5', mark: 58 },
        { name: 'Assignment-6', mark: 55 },
        { name: 'Assignment-7', mark: 60 },
      ];

    return (
        <div>
          <PieChart
          width={1500}
           height={500}
           data={marks}
          >
<Pie dataKey="mark"
 isAnimationActive={true}
 data={marks}
 cx="50%"
 cy="50%"
 outerRadius={130}
 fill="#8884d8"
>

</Pie>
<Tooltip />
          </PieChart>

        </div>
    );
};

export default Statistics;