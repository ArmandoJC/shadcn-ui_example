"use client"

import { Badge } from "@/components/ui/badge"
import { Payment } from "@/data/payments.data"
import { ColumnDef, SortDirection } from "@tanstack/react-table"


import { ArrowUpDown, MoreHorizontal, ArrowUp, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { toast } from "@/components/ui/use-toast"
import { toast } from "sonner"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

const SortedIcon = ({ isSorted }: { isSorted: SortDirection | false }) => {
    if (isSorted === 'asc') {
        return <ArrowUp className="ml-2 h-4 w-4" />
    }
    if (isSorted === 'desc') {
        return <ArrowDown className="ml-2 h-4 w-4" />
    }

    return <ArrowUpDown className="ml-2 h-4 w-4" />
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "clientName",
        // header: "Client Name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <div className="text-right">Amount</div>
                    <SortedIcon isSorted={column.getIsSorted()} />
                </Button>
            )
        }
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
                    <SortedIcon isSorted={column.getIsSorted()} />
                </Button>
            )
        },
    },
    {
        accessorKey: "amount",
        // header: () => <div className="text-right">Amount</div>,
        header: ({ column }) => {
            return (
                <div className="text-right">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Amount
                        <SortedIcon isSorted={column.getIsSorted()} />
                    </Button>
                </div>
            )
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "status",
        // header: "Status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
                    <SortedIcon isSorted={column.getIsSorted()} />
                </Button>
            )
        },
        cell: ({ row }) => {
            const status = row.getValue("status") as string;
            const variant = {
                pending: 'secondary',
                processing: 'info',
                success: 'success',
                failed: 'destructive',
            }[status] ?? ('default') as any;

            return <Badge variant={variant} capitalize>{status}</Badge>
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => {
                                navigator.clipboard.writeText(payment.id)
                                toast('Payment Id copied to the clipboard', {
                                    position: 'top-right'
                                })
                                // toast({
                                //     description: 'Payment ID copied to the clipboard 2'
                                // })
                            }}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]