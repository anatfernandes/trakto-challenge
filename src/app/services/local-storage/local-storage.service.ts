import { Injectable } from "@angular/core";

import * as CryptoJS from "crypto-js";

import { environment } from "src/environments/environment";
import { Storage } from "src/app/interfaces/Storage";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private storageKey = "trakto.com";
  private cryptoKey = environment.CRYPTO_KEY;

  set(data: Storage): void {
    for (const [key, value] of Object.entries(data)) {
      const validKey = key as keyof Storage;
      const validValue = this.decrypt(value) || value;
      data[validKey] = this.encrypt(validValue);
    }

    localStorage.setItem(this.storageKey, this.stringify(data));
  }

  update(data: Partial<Storage>): void {
    const storage = this.getStorage();

    for (const [key, value] of Object.entries(data)) {
      const validKey = key as keyof Storage;

      if (storage[validKey]) {
        storage[validKey] = `${value}`;
      }
    }

    this.set(storage);
  }

  getToken(): string | null {
    return this.decrypt(this.getStorage().access_token) || null;
  }

  getAvatar(): string | null {
    return this.decrypt(this.getStorage().avatar) || null;
  }

  getFirstname(): string | null {
    return this.decrypt(this.getStorage().firstname) || null;
  }

  getLastname(): string | null {
    return this.decrypt(this.getStorage().lastname) || null;
  }

  clear(): void {
    localStorage.removeItem(this.storageKey);
  }

  private getStorage(): Storage {
    return this.parse(localStorage.getItem(this.storageKey));
  }

  private parse(data: string | null): Storage {
    return JSON.parse(data || "{}");
  }

  private stringify(data: Object): string {
    return JSON.stringify(data);
  }

  private encrypt(text: string): string {
    return CryptoJS.AES.encrypt(text, this.cryptoKey).toString();
  }

  private decrypt(text: string): string | void {
    if (!text) return;
    return CryptoJS.AES.decrypt(text, this.cryptoKey).toString(
      CryptoJS.enc.Utf8
    );
  }
}
