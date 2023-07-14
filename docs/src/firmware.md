# Firmware Update  for ASRock Rack Motherboard

This guide outlines the steps to update the firmware on your ASRock Rack
motherboard. The update includes the BIOS, BMC (Baseboard Management
Controller), and the networking firmware.

Before starting, download the following files:

- [BIOS L4.01](https://www.dropbox.com/s/01csce7jp2n18xm/B650D4U-2L2T-BCM_4.01.ROM?dl=0)
- [BMC](https://www.dropbox.com/s/gwrmaowuxn8uvi5/B650D4U_2L2T-BCM_BMC4.01.00.zip?dl=0)
- [Broadcom 57416 LAN Flashing Firmware](https://www.dropbox.com/s/ftuwqr9renu9lo9/Broadcom%2057416%20LAN%20Flashing%20FW%20EN.zip?dl=0)

## BIOS and BMC Update

ASRock Rack provides a BIOS flash utility called ASRock Rack Instant Flash,
embedded in the Flash ROM, to make the BIOS update process simple and
straightforward.

1. **Preparation**: Format a USB flash drive with FAT32/16/12 file system and
   save the new BIOS file to your USB flash drive.

2. **Access ASRock Rack Instant Flash**: Restart the server and press the
   `<F6>` key during the POST or the `<F2>` key to enter the BIOS setup menu.
   From there, access the ASRock Rack Instant Flash utility.

3. **Update BIOS**: Follow the instructions provided by the utility to update
   the BIOS.

*The email did not provide specific instructions on how to update the BMC, so
ensure to follow your motherboard's manual or the manufacturer's instructions.*

## Networking Firmware Update

1. **Preparation**: Format a USB flash drive and copy the
   "bnxtmt-lite-uefi-221.0.117.0-x64" folder from the downloaded Broadcom 57416
   LAN Flashing Firmware onto it.

2. **Access UEFI Shell**: Insert the USB flash drive into your ASRock Rack
   server board, reboot the server, and hit F11 at the POST screen. Select
   "UEFI: Built-in EFI Shell". The USB flash drive should be named `FS0:`. Type
   `FS0:` and press enter.

    ![UEFI
    Shell](images/firmware/image0.png)

3. **Verify Current Firmware Version**: Execute `bnxtmt.efi` to display the
   current firmware version.

    ![bnxtmt efi
    execution](images/firmware/image1.png)

4. **Erase the Flash**: Navigate to the "bnxtmt-lite-uefi-221.0.117.0-x64"
   folder and execute `bnxtmt.efi -sysop -none -no_swap –blank` to erase the
   current firmware.

    ![Erase
    Flash](images/firmware/image3.jpg)

5. **Flash the Firmware**: Execute `bnxtmt.efi -sysop -none -no_swap -fnvm
   ASRR57416-2T.PKG -log FW1.log` to flash the new firmware. Here,
   `ASRR57416-2T.PKG` is the firmware file.

    ![Flash
    Firmware](images/firmware/image2.jpg)

6. **Verify Updated Firmware Version**: Run `bnxtmt.efi` again to verify the
   new firmware version.

    ![bnxtmt efi
    execution](images/firmware/image4.jpg)

7. **Flash LAN Ports' MAC Addresses**: Execute `bnxtmt.efi -none –m -log
   MAC1.log`.

    ![Flash
    MAC](images/firmware/image5.jpg)

8. **Input MAC Addresses**: Enter the MAC addresses of both LAN ports when
   prompted. *Write down these addresses beforehand.*

    ![Enter MAC
    Addresses](images/firmware/image6.jpg)

9. **Power Cycle**: Turn off the system, power cycle the PSU, and then power
   everything back on.

> Note: The MAC addresses for your LAN ports are crucial. Write them down
> before starting the update process as they need to be added during the
> command at step 8.
