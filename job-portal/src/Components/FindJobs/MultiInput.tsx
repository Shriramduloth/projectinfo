import { useState } from 'react';
import { Checkbox, CheckIcon, Combobox, Group, Input, Pill, PillsInput, useCombobox } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
const groceries = ['Apples', 'Bananas', 'Broccoli', 'Carrots ', 'Chocolate'];
const MultiInput = () => {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });
    const [search, setSearch] = useState('');
    const [data, setData] = useState(groceries);
    const [value, setValue] = useState<string[]>([]);
    const exactOptionMatch = data.some((item) => item === search);
    const handleValueSelect = (val: string) => {
        setSearch('');
        if (val === '$create') {
            setData((current) => [...current, search]);
            setValue((current) => [...current, search]);
        } else {
            setValue((current) =>
                current.includes(val) ? current.filter((v) => v !== val) : [...current, val]);
        }
    };
    const handleValueRemove = (val: string) =>
        setValue((current) => current.filter((v) => v !== val));

    const values = value
        .slice(
            0, 1)
        .map((item) => (
            <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
                {item}
            </Pill>
        ));

    const options = data.map((item) => (
        <Combobox.Option value={item} key={item} active={value.includes(item)}>
            <Group gap="sm"> I
                <Checkbox size='xs' color='brightsun.4'
                    checked={value.includes(item)}
                    onChange={() => { }}
                    aria-hidden
                    tabIndex={-1}
                    style={{ pointerEvents: 'none' }} />
                <span>{item}</span>
            </Group>
        </Combobox.Option>
    ));
    return (
        <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
            <Combobox.DropdownTarget>
                <PillsInput variant='unstyled' rightSection={<Combobox.Chevron />} onClick={() => combobox.toggleDropdown()}
                    leftSection={
                        <div className='text-bright-sun-400 p-1 bg-mine-shaft-900 rounded-full mr-1'>
                            <IconSearch />
                        </div>
                    }
                >
                    <Pill.Group>
                        {value.length > 0 ? (
                            <>
                                {values}
                                {value.length > 1 && (
                                    <Pill>+{value.length - 1} more</Pill>
                                )}
                            </>
                        ) : (
                            < Input.Placeholder > Pick one or more values</Input.Placeholder>)}
                       
                    </Pill.Group>

                </PillsInput>
            </Combobox.DropdownTarget>

            <Combobox.Dropdown>
                <Combobox.Search
                    value={search}
                    onChange={(event) => setSearch(event.currentTarget.value)}
                    placeholder="Search groceries"
                />

                <Combobox.Options>
                    {options}

                    {!exactOptionMatch && search.trim().length > 0 && (
                        <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
                    )}
                    {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
                        <Combobox.Empty>Nothing found</Combobox.Empty>
                    )}
                </Combobox.Options>
            </Combobox.Dropdown>
        </ Combobox>
    );
}
export default MultiInput;
