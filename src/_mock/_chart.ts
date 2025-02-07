import { range } from 'lodash';

export const AreaChartData = [...range(1, 31).map((r) => ({ day: r, "تعداد": r }))];
export const BarChartData = [...range(1, 31).map((r) => ({ day: `در ${r} دقیقه`, 'تعداد کاربر': 0 }))];
