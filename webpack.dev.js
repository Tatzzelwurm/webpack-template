 import { merge } from 'webpack-merge';
 import common from './webpack.common.js';

  export default merge(common, {
   mode: 'development',
    devtool: "eval-source-map",
    devServer: {
    watchFiles: ["./src/template.html"],
    open: true, // Автоматически открывает браузер при запуске
    port: 8080, // Порт, на котором запустится сервер
    hot: true, // Горячая перезагрузка (обновляет страницу без перезагрузки)
  },
   
 });