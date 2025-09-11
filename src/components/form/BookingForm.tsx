"use client";

import * as React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { toast } from "sonner";
import { format } from "date-fns";
import { id } from "date-fns/locale";

import {
  Calendar as CalendarIcon,
  CheckCircle,
  Loader2,
  MessageSquare,
  CalendarPlus,
} from "lucide-react";
import { bookingSchema } from "@/lib/schema";
import { classesData } from "@/data/classes";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // <-- Impor RadioGroup
import Link from "next/link";

const WHATSAPP_NUMBER = "6281234567890";
const timeSlots = [
  "08:00",
  "09:00",
  "10:00",
  "13:00",
  "14:00",
  "15:00",
  "19:00",
  "20:00",
];

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingForm({ onClose }: { onClose: () => void }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormValues | null>(
    null
  );

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      class: undefined,
      date: undefined,
      time: undefined,
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: BookingFormValues) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmittedData(values);
      setIsSuccess(true);
      toast.success("Booking Anda telah kami terima!");
      form.reset();
    } catch {
      toast.error("Terjadi kesalahan, silakan coba lagi.");
    }
  }

  const generateWhatsAppLink = () => {
    if (!submittedData) return "#";
    const bookingDate = format(submittedData.date, "eeee, dd MMMM yyyy", {
      locale: id,
    });
    const message = `
Halo, saya ingin mengonfirmasi booking kelas berikut:

*Jadwal:* ${bookingDate}, pukul ${submittedData.time}
*Kelas yang Dipilih:* ${submittedData.class}

*Nama:* ${submittedData.name}
*No. WhatsApp:* ${submittedData.phone}

Mohon konfirmasi ketersediaan jadwal. Terima kasih.
    `.trim();
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  };

  const generateGoogleCalendarLink = () => {
    if (!submittedData) return "#";
    const [hours, minutes] = submittedData.time.split(":").map(Number);
    const startDate = new Date(submittedData.date);
    startDate.setHours(hours, minutes, 0, 0);
    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1);

    const formatDate = (date: Date) =>
      date.toISOString().replace(/-|:|\.\d{3}/g, "");

    const url = new URL("https://www.google.com/calendar/render");
    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set(
      "text",
      `Booking Kelas: ${submittedData.class} di Gentala Arasy`
    );
    url.searchParams.set(
      "dates",
      `${formatDate(startDate)}/${formatDate(endDate)}`
    );
    url.searchParams.set(
      "details",
      `Harap tunggu konfirmasi akhir dari kami via WhatsApp.`
    );
    url.searchParams.set("location", "Gentala Arasy Fitness Center, Jambi");
    return url.toString();
  };

  if (isSuccess && submittedData) {
    return (
      <div className="animate-fade-in space-y-4 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-primary" />
        <h3 className="text-xl font-heading font-bold">Booking Diterima!</h3>
        <p className="text-sm text-muted-foreground">
          Terima kasih, {submittedData.name}. Harap kirim konfirmasi via
          WhatsApp dan tambahkan pengingat ke kalender Anda.
        </p>
        <div className="space-y-2 pt-2">
          <Button asChild size="lg" className="w-full">
            <Link href={generateWhatsAppLink()} target="_blank">
              <MessageSquare className="mr-2 h-5 w-5" />
              Kirim Konfirmasi via WhatsApp
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="w-full">
            <Link href={generateGoogleCalendarLink()} target="_blank">
              <CalendarPlus className="mr-2 h-5 w-5" />
              Tambahkan ke Google Calendar
            </Link>
          </Button>
        </div>
        <Button variant="ghost" onClick={onClose} className="w-full">
          Tutup
        </Button>
      </div>
    );
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="class"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Pilih Satu Program/Kelas</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-2 max-h-40 overflow-y-auto pr-2"
                >
                  {classesData.map((item) => (
                    <FormItem
                      key={item.title}
                      className="flex items-center space-x-3 space-y-0 border rounded-md p-3"
                    >
                      <FormControl>
                        <RadioGroupItem value={item.title} />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer w-full">
                        {item.title}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Tanggal</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP", { locale: id })
                        ) : (
                          <span>Pilih tanggal</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < today}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Waktu</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jam" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Booking Sekarang
        </Button>
      </form>
    </Form>
  );
}
