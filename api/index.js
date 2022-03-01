import app from "./app.js";
import colors from "colors";
const PORT = process.env.PORT || 5000;

// Start
app.listen(PORT, () => {
  console.log(
    `${process.env.NODE_ENV} server running on port ${process.env.PORT}.`.yellow
      .bold
  );
});
