'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { getCountryCallingCode } from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import type { Country } from 'react-phone-number-input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';

type CountryOption = {
  value?: Country;
  label: string;
  divider?: boolean;
};

type PhoneCountrySelectProps = {
  value?: Country;
  onChange: (value?: Country) => void;
  options: CountryOption[];
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  defaultCountry?: Country;
};

function CountryFlag({
  country,
  label,
  className,
}: {
  country: Country;
  label: string;
  className?: string;
}) {
  const Flag = flags[country];

  if (!Flag) {
    return null;
  }

  return (
    <span
      className={cn(
        'inline-flex h-[15px] w-[21px] shrink-0 items-center justify-center overflow-hidden rounded-[2px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)] [&_svg]:block [&_svg]:h-full [&_svg]:w-full',
        className,
      )}
    >
      <Flag title={label} />
    </span>
  );
}

export function PhoneCountrySelect({
  value,
  onChange,
  options,
  disabled,
  readOnly,
  className,
  searchPlaceholder = 'Pesquisar país...',
  emptyMessage = 'Nenhum país encontrado.',
  defaultCountry = 'PT',
}: PhoneCountrySelectProps) {
  const [open, setOpen] = useState(false);
  const activeCountry = value ?? defaultCountry;
  const selectedOption =
    options.find((option) => option.value === activeCountry) ??
    options.find((option) => option.value === defaultCountry);
  const isDisabled = disabled || readOnly;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={isDisabled}
          aria-label={selectedOption?.label ?? 'Selecionar país'}
          className={cn(
            'inline-flex h-[3.25rem] items-center gap-2 border-0 bg-transparent px-3 sm:px-4',
            'text-sm font-medium text-[#1F4E5F] outline-none transition-colors',
            'hover:bg-[#eef3ef] focus-visible:bg-[#eef3ef]',
            isDisabled && 'cursor-not-allowed',
            className,
          )}
        >
          <CountryFlag
            country={activeCountry}
            label={selectedOption?.label ?? activeCountry}
          />
          <span className="whitespace-nowrap tabular-nums">
            +{getCountryCallingCode(activeCountry)}
          </span>
          <ChevronDown
            className="h-4 w-4 shrink-0 text-[#1F4E5F]/55"
            aria-hidden
          />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[min(100vw-2rem,320px)] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            {options
              .filter((option): option is CountryOption & { value: Country } =>
                Boolean(option.value),
              )
              .map((option) => {
                const country = option.value;
                const callingCode = getCountryCallingCode(country);

                return (
                  <CommandItem
                    key={country}
                    value={`${option.label} ${country} +${callingCode}`}
                    onSelect={() => {
                      onChange(country);
                      setOpen(false);
                    }}
                    className="gap-3"
                  >
                    <CountryFlag country={country} label={option.label} />
                    <span className="min-w-0 flex-1 truncate text-[#111111]">
                      {option.label}
                    </span>
                    <span className="shrink-0 text-sm tabular-nums text-[#6B7280]">
                      +{callingCode}
                    </span>
                  </CommandItem>
                );
              })}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
