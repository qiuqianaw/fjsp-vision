export const options = [
  '完工时间',
  '机器总负荷',
  '最大负荷机器',
  '提前/延期惩罚',
  '总延期时间',
  '平均流经时间',
  '机器利用率',
  '生产成本'
];

export const initialValues = {
  workPiece: [36],
  processes: 205,
  machines: [10],
  arrivalAvg: 100,
  productionTarget: ['机器总负荷', '提前/延期惩罚'],
  algorithm: 'HRL'
};
