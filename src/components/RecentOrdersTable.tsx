import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
interface ItableData {
  avatar: string;
  customerName: string;
  orderNo: number;
  amount: number;
  status: "Delivered" | "Pending" | "Cancelled";
}
const orders: ItableData[] = [
  {
    avatar: "/images/user11.jpg",
    customerName: "Wade Warren",
    orderNo: 15478256,
    amount: 124.11,
    status: "Delivered",
  },
  {
    avatar: "/images/user7.jpg",
    customerName: "Jane Cooper",
    orderNo: 45812461,
    amount: 90.02,
    status: "Delivered",
  },
  {
    avatar: "/images/user8.jpg",
    customerName: "Guy Hawkins",
    orderNo: 45124867,
    amount: 65.38,
    status: "Pending",
  },
  {
    avatar: "/images/user9.jpg",
    customerName: "Kristin Watson",
    orderNo: 78462315,
    amount: 325.98,
    status: "Cancelled",
  },
  {
    avatar: "/images/user10.jpg",
    customerName: "Cody Fisher",
    orderNo: 98546124,
    amount: 545.55,
    status: "Pending",
  },
  {
    avatar: "/images/user12.jpg",
    customerName: "Savannah Nyugen",
    orderNo: 12456875,
    amount: 128.22,
    status: "Delivered",
  },
];
export default function RecentOrdersTable() {
  function getStatusClassName(status: "Delivered" | "Pending" | "Cancelled") {
    switch (status) {
      case "Delivered":
        return "bg-green-200 text-green-600 border-green-400 dark:bg-green-900 dark:border-green-900 dark:text-green-500";
      case "Pending":
        return "bg-amber-200 text-amber-600 border-amber-400 dark:bg-amber-900 dark:border-amber-900 dark:text-amber-500";
      case "Cancelled":
        return "bg-red-200 text-red-600 border-red-400 dark:bg-red-900 dark:border-red-900 dark:text-red-500";
      default:
        return "";
    }
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-left">Customer</TableHead>
          <TableHead className="text-left">Order No.</TableHead>
          <TableHead className="text-left">Amount</TableHead>
          <TableHead className="text-left">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.orderNo}>
            <TableCell className="flex items-center space-x-2">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src={order.avatar} alt="Avatar" />
                <AvatarFallback>
                  {order.customerName.split(" ")[0][0] +
                    order.customerName.split(" ")[1][0]}
                </AvatarFallback>
              </Avatar>
              <div className="font-medium">{order.customerName}</div>
            </TableCell>
            <TableCell className="">{order.orderNo}</TableCell>
            <TableCell className="">${order.amount}</TableCell>
            <TableCell className="">
              <Badge
                className={`text-xs  ${getStatusClassName(order.status)}`}
                variant="outline"
              >
                {order.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
