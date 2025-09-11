"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { membershipSchema } from "@/lib/schema";
import { membershipData } from "@/data/membership";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const WHATSAPP_NUMBER = "6285156566928";

type MembershipFormValues = z.infer<typeof membershipSchema>;

export function MembershipForm({ onClose }: { onClose: () => void }) {
  const form = useForm<MembershipFormValues>({
    resolver: zodResolver(membershipSchema),
    defaultValues: { name: "", phone: "" },
  });

  const { isSubmitting } = form.formState;

  function onSubmit(values: MembershipFormValues) {
    const selectedPlan = membershipData.find((p) => p.title === values.plan);
    if (!selectedPlan) return toast.error("Paket tidak valid.");

    const message = `
Halo, saya ingin mendaftar membership.

*Paket yang Dipilih:* ${selectedPlan.title}
*Harga:* $${selectedPlan.price}/${selectedPlan.period}

*Nama:* ${values.name}
*No. WhatsApp:* ${values.phone}

Mohon informasinya untuk langkah pembayaran. Terima kasih.
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // 1. Buka WhatsApp
    window.open(whatsappUrl, "_blank");

    // 2. Tampilkan notifikasi sukses
    toast.success("Berhasil! Silakan kirim pesan Anda di WhatsApp.");

    // 3. Tutup modal
    onClose();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Field untuk Memilih Paket */}
        <FormField
          control={form.control}
          name="plan"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Pilih Paket Membership</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {membershipData.map((plan) => (
                    <FormItem
                      key={plan.title}
                      className="flex items-center space-x-3 space-y-0 border rounded-md p-3"
                    >
                      <FormControl>
                        <RadioGroupItem value={plan.title} />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer w-full">
                        {plan.title} - ${plan.price}/{plan.period}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Field untuk Data Diri */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl>
                <Input placeholder="Nama Anda" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor WhatsApp</FormLabel>
              <FormControl>
                <Input placeholder="08123456xxxx" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Daftar & Kirim via WhatsApp
        </Button>
      </form>
    </Form>
  );
}
