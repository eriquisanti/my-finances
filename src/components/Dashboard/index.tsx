import Summary from "@/components/Dashboard/Summary";
import Card from "@/components/Dashboard/Card";
import DeshboardTable from "@/components/Dashboard/DashboardTable";

export default function Dashboard() {
  return (
    <div>
      <Summary />
      <div className="grid grid-cols-3 grid-rows-1 gap-20 my-6">
        <Card.Root className="flex items-center gap-4">
          <Card.Icon name="Wallet" />
          <div className="">
            <Card.Title value="Title" />
            <Card.Text value="text" />
          </div>
        </Card.Root>
        <Card.Root className="flex items-center gap-4">
          <Card.Icon name="Wallet" />
          <div className="">
            <Card.Title value="Title" />
            <Card.Text value="text" />
          </div>
        </Card.Root>
        <Card.Root className="flex items-center gap-4">
          <Card.Icon name="Wallet" />
          <div className="">
            <Card.Title value="Title" />
            <Card.Text value="text" />
          </div>
        </Card.Root>
      </div>
      <DeshboardTable />
    </div>
  );
}