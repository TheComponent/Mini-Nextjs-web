"use client";

import Image from 'next/image'

import { Fragment, useState } from 'react'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'

import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types'

const SearchManufacturer = ({manufacturer, setManufacturer} : SearchManufacturerProps) => {

  const [query, setQuery] = useState('');

  const filteredManufacturers = 
  query === "" 
    ? manufacturers 
    : manufacturers.filter((item) => (
      item.toLowerCase()
      .replace(/\s+/g, "")
      .includes(query.toLowerCase().replace(/\s+/g,""))
    ))

  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
          <ComboboxButton className="absolute top-[14px]">
            <Image 
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car logo"
            />
          </ComboboxButton>

          <ComboboxInput 
            className="search-manufacturer__input"
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions>
              {
                filteredManufacturers.map((item) => (
                  <ComboboxOption 
                    key={item} 
                    value={item}
                    className="
                    relative search-manufacture__option text-gray-900
                    data-[focus]:text-white data-[focus]:bg-primary-blue"
                    >
                      {item}
                  </ComboboxOption>
                ))
              }
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer