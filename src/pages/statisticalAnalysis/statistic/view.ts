export const performanceIndicatorOptions = [
  { value: '1', label: '订单完成率' },
  { value: '2', label: '机床利用率' },
  { value: '3', label: '机床可用率' },
  { value: '4', label: '合格率' },
  { value: '5', label: '总能耗' }
];

export const initialValues = {
  performanceIndicator: ['订单完成率', '机床利用率', '合格率'],
  period: ['2023-01-01', '2023-03-30']
};
