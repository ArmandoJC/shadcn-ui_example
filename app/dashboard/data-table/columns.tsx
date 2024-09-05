"use client"

import { Badge } from "@/components/ui/badge"
import { Payment } from "@/data/payments.data"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "clientName",
        header: "Client Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
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
        header: "Status",
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
]