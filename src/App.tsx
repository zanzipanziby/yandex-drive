import { Card } from "./components/ui/card";
import { Typography } from "./components/ui/typography";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <Card>
        <Typography as={"h1"} variant={"h1"}>
          Add files to Yandex Drive
        </Typography>
        <Button variant={"primary"}>Accept</Button>
      </Card>
    </div>
  );
}

export default App;
